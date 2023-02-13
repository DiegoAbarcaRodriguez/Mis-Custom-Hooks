import { useState } from "react";


export const useForm = (initialFormState = {}) => {

    const [formState, setFormState] = useState(initialFormState);



    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value //Crea Propiedad con el valor de target.name
        });
    }

    const onResetForm = () => {
        setFormState(initialFormState);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    };
}
