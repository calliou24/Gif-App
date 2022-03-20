import React from 'react'
import { shallow } from 'enzyme'
import { beforeEach, describe, expect, test, vi } from 'vitest'

import { GifComponent } from './../../../components/GifComponent/GifComponent'

describe('Button component', () => {
    

    let title = 'TITLE'
    let url = 'https://music.youtube.com'
    const wrapper = shallow(<GifComponent title={title} url={url}/>)

    test('Snapshot', ()=> {
        expect(wrapper).toMatchSnapshot()
    })

    test('My title should match width the GifComponent "p" contetnt', ()=> {

        const wrapperText = wrapper.find('p').text()
        expect(wrapperText).toBe(title)
    })
    test('My image src should be the same as url',()=> {
        
        const src = wrapper.find('img').prop('src')
        // console.log(src)
        // console.log(url)
        expect(src).toBe(url)
    })
    test('should return the className "animate__bounceInLeft"', () => {
        
        const wrapperClassName = wrapper.find("li").prop('className')
        
        let classNameTest = 'animate__bounceInLeft'
        //expect(wrapperClassName.className).includes(classNameTest) This could be a way to test the className prop
        expect(wrapperClassName.includes(classNameTest)).toBe(true) //this one is another but i like the first one
     })

})
