import { describe, expect, test } from "vitest";
import { shallow } from 'enzyme' 

import {GifGrid} from '../../../components/GifGrid'

describe("Should check for snapshots", ()=> {
    
    const cats = ["Anime"]
    
    const wrapper = shallow(<GifGrid category={cats}/>)

    test("Snapshot", ()=> {
        expect(wrapper).toMatchSnapshot()
    })      
})