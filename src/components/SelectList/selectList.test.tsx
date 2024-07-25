import { render, screen, fireEvent } from "@testing-library/react-native"
import { SelectList } from "@components/SelectList"

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

        const selectedCity = screen.getByText(/campo/i)
    })

    it("Should not be returned city details selected.", () => {
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

        const selectedCity = screen.queryByText("Florianópolis")
        expect(selectedCity).toBeFalsy()
    })

    it("Should be called the function once with the city details selected", () => {
        const data = [
            { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
            { id: '2', name: 'Campo grande', latitude: 124, longitude: 456 }
        ]

        const onPress = jest.fn()

        render( 
        <SelectList 
            data={data}  
            onChange={() => {}}
            onPress={onPress}
            />
        )

        const selectedCity = screen.getByText(/campo/i)
        fireEvent.press(selectedCity)

        expect(onPress).toBeCalledTimes(1);
    })

    it("Should be called the function once with the city details selected", () => {
        const data = [
            { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
            { id: '2', name: 'Campo grande', latitude: 124, longitude: 456 }
        ]

        const onPress = jest.fn()

        render( 
        <SelectList 
            data={data}  
            onChange={() => {}}
            onPress={onPress}
            />
        )

        const selectedCity = screen.getByText(/campo/i)
        fireEvent.press(selectedCity)

        expect(onPress).toBeCalledWith(data[1])
    })

    it("Should not be returned the component with children", () => {
        render(
        <SelectList
            data={[]}
            onChange={() => {}}
            onPress={() => {}}
             />
            )

            const options = screen.getByTestId("options")
            expect(options.children).toHaveLength(0)
    })
})