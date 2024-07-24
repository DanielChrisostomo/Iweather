import { render } from "@testing-library/react-native";
import { Input } from "@components/Input"

describe("Component: Input", () => {
    it("Should be rendered whithout activity indicator", () => {
        const { debug } = render( <Input /> )
        debug();
    })
})