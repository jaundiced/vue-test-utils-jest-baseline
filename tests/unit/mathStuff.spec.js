import math from '@/lib/utils/mathStuff.js'

describe('math.add', () => {
    it('adds 3 and 7', () => {
        var result = math.add(3, 7)
        expect(result).toEqual(10, 'expected 3 + 7 to equal 10')
    })
})