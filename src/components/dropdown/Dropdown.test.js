// import { shalow, mount, render } from "enzime";
import Dropdown from "./index";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// describe('Dropdown', () => {

//     it('have initial value set to true', ()=>{
//         const wraper = shalow(<Dropdown/>);
//         expect(wraper.state('isOpen').toBe(true)
//     })

// })

//Dropdown comece fechado
//Quero que o dropdown mostre as opções de menu quando ele for clicado
//Quando selecionar um item de menu, fechar o dropdown e indicar qual opção foi selecionada
const title = "Selecione o Pokemón";
const options = ["Bulbasaur", "Squirtle", "Charmander"];
describe("Dropdown", () => {
  it("should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  it("should show options when open", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    const dropdownButton = screen.getByRole("button", { name: title });
    userEvent.click(dropdownButton);

    expect(
      screen.queryByRole("menuitem", { name: options[0] })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: options[1] })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: options[2] })
    ).toBeInTheDocument();
  });

  it("should signal an option was selected and close the dropdown", () => {
    const onSelect = jest.fn();
    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    const dropdownButton = screen.getByRole("button", { name: title });
    userEvent.click(dropdownButton);

    expect(
      screen.queryByRole("menuitem", { name: options[0] })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: options[1] })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: options[2] })
    ).toBeInTheDocument();

    userEvent.click(screen.queryByRole("menuitem", { name: options[1] }));

    expect(onSelect).toHaveBeenCalledWith(options[1]);

    expect(
      screen.queryByRole("menuitem", { name: options[0] })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: options[1] })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: options[2] })
    ).not.toBeInTheDocument();
  });
});
