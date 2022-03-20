
import jest from 'jest-mock';

import { test, expect, describe, vitest, beforeEach, isMockFunction} from 'vitest'
import { shallow } from 'enzyme' 
import { FormInput } from './../../../components/FormInput'


describe('Testing the formInput component',()=> {
    
    const  sendValue = jest.fn();
    
    let wrapper;//this requiared two functions
    
    beforeEach(()=> {
        vitest.clearAllMocks()
        wrapper = shallow(<FormInput add={sendValue} reset={sendValue}/>)  ;
    })

    test( 'The components should show well', ()=> {
        expect(wrapper).toMatchSnapshot()
    })
    
    
    test('Should simulate onChange event',()=> {
        
        const input = wrapper.find('input')
        
        const value = 'Simulated Value'
        
        input.simulate('change', { target: { value }}) //the events and the evaluations have to be on the correct steps

        const paragrapgh = wrapper.find('#p').text()
        //esto metodo simulate recibe como parametro lo que va a simular y como segundo parametro un objeto que va a ser el evento en si  
        
        expect(paragrapgh).toBe(value)
    })
    
    test('Should no execute the setCategories function', () => {

        wrapper.find('form').simulate('submit', {target : {firstChild : false}, preventDefault(){} } ) //le pasamos como segundo argumento el evento que queremos que se dispare 

        expect( sendValue ).toHaveBeenCalled()


    })
    test('Should called the sendValue and clear the input area',()=> {
        
        const form  = wrapper.find('form');
        const input  = wrapper.find('input');
        const value = 'xd';
        
        input.simulate('change', { target: { value }})
        form.simulate('submit', { target : { firstChild : true }, preventDefault(){} })
        
        const pText = wrapper.find('#p').text()
        console.log(pText)
        
        expect(  sendValue).toHaveBeenCalled()
        //expect( sendValue ).toHaveBeenCalledWith( expect.any(Function))
        expect( pText ).toBe('')

    })

})

