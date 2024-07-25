import { SelectList } from "@components/SelectList"
import { render, screen } from "@testing-library/react-native"

describe("Component: SelectList", () => {
    it("Should be returned city details selected.", () => {
        const data = [
            { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
            { id: '2', name: 'Campo grande', latitude: 124, longitude: 456 }
        ]

        render( 
        <SelectList 
            data={data}  
            onChange={() => {}}
            onPress={() => {}}
            />
        )

        const selectedCity = screen.getByText("Campinas")
    })
})