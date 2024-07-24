import { getNextDays } from './getNextDays';

    it("should be returned the next five days", () => {
        const days = getNextDays();
    
        expect(days.length).toBe(5)
    })
    