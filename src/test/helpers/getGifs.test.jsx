

import { beforeEach, describe, expect, test, vi } from 'vitest'
import { getGifs } from './../../helpers/getGifs'

describe("Testing getGifs fetch", ()=> {
    test("The return Should have more than 20 items", async ()=> {
    
        const array = await getGifs("Anime")
        expect(array.length > 30).toBe(true)
    })

})