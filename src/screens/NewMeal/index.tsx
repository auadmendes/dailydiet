import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

import {
  Container,
  Content,
  DateAndTime,
  FieldDate,
  FieldTime,
  FilterContainer,
  Form,
  InputText,
  InputTextArea,
  Label,
} from "./styles";

const uuid = require('uuid');

import { ButtonWithIcon } from "../../components/ButtonWithIcon";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter";
import { AppError } from "../../utils/AppError";
import { createMealByDate } from "../../storage/addMeal/createMealByDate";



export function NewMeal() {
  const [foodType, setFoodType] = useState('');
  const [newMeal, setNewMeal] = useState('');
  const [description, setDescription] = useState('');
  const [newDate, setNewDate] = useState('')
  const [newTime, setNewTime] = useState('')

  const data = ['Sim', 'Não']
  const navigation = useNavigation()

  const uniqueId = uuid.v4();


  async function handleNewMeal() {

    if (newMeal.trim().length === 0) {
      return Alert.alert('Alerta', 'Oops, parece que você esqueceu o nome da refeição.')
    }
    if (description.trim().length === 0) {
      return Alert.alert('Alerta', 'Hmmm, que tal dar uma descrição para a sua refeição..')
    }
    if (newTime.trim().length === 0) {
      return Alert.alert('Alerta', 'Que legal! Agora só falta informar quando foi essa refeição.')
    }
    if (foodType === '') {
      return Alert.alert('Alerta', 'A refeição está dentro da dieta?.')
    }

    const mealId = String(uniqueId)

    const newMealData = {
      title: newDate,
      id: uuid.v4(),
      data: {
        id: uuid.v4(),
        name: newMeal,
        description: description,
        date: newDate,
        time: newTime,
        diet: foodType,
      }
    }

    try {

      await createMealByDate(newMealData)
      navigation.navigate('feedback', { diet: foodType })

    } catch (error) {
      if (error instanceof AppError) {
        console.log(error.message)
      } else {
        console.log('Erro generico cadastrando refeição ' + error)
      }
    }
    // const allTheMeals = getMealsAll()
    // console.log(allTheMeals)
  }


  useEffect(() => {
    const currentDate = new Date();
    //console.log('Current date:', currentDate);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day = currentDate.getDate();

    setNewDate(`${day}.${month}.${year}`)
  }, [])



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Container>
        <Header
          variant="GRAY"
          title="Nova refeição"
        />

        <Content>
          <ScrollView
            style={{ flex: 1, width: '100%' }}

            showsVerticalScrollIndicator={false}
          >
            <Form>
              <Label>Nome</Label>
              <InputText
                placeholder="Nova refeição"
                onChangeText={setNewMeal}
                value={newMeal}
              />

              <Label>Descição</Label>
              <InputTextArea
                multiline
                numberOfLines={6}
                onChangeText={setDescription}
                value={description}
              />

              <DateAndTime>
                <FieldDate>
                  <Label>Data</Label>
                  <InputText
                    placeholder="Data"
                    onChangeText={setNewDate}
                    value={newDate}
                    keyboardType="numbers-and-punctuation"
                  />
                </FieldDate>

                <FieldTime>
                  <Label>Hora</Label>
                  <InputText
                    placeholder="Hora"
                    onChangeText={setNewTime}
                    value={newTime}
                  />
                </FieldTime>
              </DateAndTime>

              <Label>Está dentro da dieta?</Label>
              <FilterContainer>
                {data.map((item) => (
                  <Filter
                    key={item}
                    title={item}
                    icon="dot-circle-o"
                    isActive={item === foodType}
                    type={item === 'Sim' ? 'PRIMARY' : 'SECONDARY'}
                    typo={item === 'Sim' ? 'PRIMARY' : 'SECONDARY'}
                    onPress={() => setFoodType(item)}
                  />
                ))}
              </FilterContainer>

            </Form>
          </ScrollView>
          <ButtonWithIcon
            title="Cadastrar refeição"
            onPress={handleNewMeal}
          />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  )
}