import React from "react";
import SchoolList from "../components/Schools/school-list";
import { fireEvent, render } from "react-native-testing-library";

const schools = [
    {school_name: 'School 1' , dbn : '123', overview_paragraph:'Paragraph 1'},
    {school_name: 'School 2' , dbn : '456', overview_paragraph:'Paragraph 2'},
];

describe('<SchoolList />', ()=>{
  it('renders school list',() =>{
    const { getByText } = render(<SchoolList schools={schools}  navigation={{}}/>)

    schools.forEach((schools)=>{
        const schoolElement = getByText(schools.school_name);
        expect(schoolElement).toBeTruthy();
    })
  })
  it('calls navigations on press', () =>{
    const navigationMock ={
        naviagte : jest.fn()
    };

    const { getByText } = render(<SchoolList schools={schools}  navigation={{ navigationMock}}/>)

    schools.forEach((school)=>{
        const schoolElement = getByText(school.school_name);
        fireEvent.press(schoolElement);
        expect(navigationMock.naviagte).toHaveBeenCalledWith('SchoolDetails', {school});
    })
  })
} )