import React from "react";
import SchoolDetails from "../components/Schools/school-details";
import { render } from "react-native-testing-library";

const school = { school_name: 'School 1', dbn : '123',overview_paragraph : "Overview 1"};


describe('<SchoolDetails />', () =>{
    it('renders school details', ()=>{
        const {getByText} = render (<SchoolDetails route={{ params: {school}}}/>)
        const schoolNameElement = getByText(`{school_name} , {dbn}`);
        expect(schoolNameElement).toBeTruthy();
    })
})