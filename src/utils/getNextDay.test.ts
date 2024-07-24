import { getNextDays } from './getNextDays';

describe("Grupo de testes | getNextDays", () => {
    it("Teste 1 should be returned the next five days", () => {
        const days = getNextDays();
        console.log(days)
    
        expect(days.length).toBe(5)
    })
    
    it("Teste 2 should be returned the next five days", () => {
        const days = getNextDays();
        console.log(days)
    
        expect(days.length).toBe(5)
    })
})