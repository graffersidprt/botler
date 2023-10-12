import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import Table from "./Table";
import Accordion from "./Accordion";

export default function ComponentsOverrides(theme: any) {
    return Object.assign(
        Input(theme),
        Button(theme),
        Select(theme),
        Table(theme),
        Accordion(theme),
    )
};