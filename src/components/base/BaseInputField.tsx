import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/core';
import { useField } from 'formik';
import * as React from 'react';

type TBaseInputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    placeholder: string;
};

const BaseInputField: React.FC<TBaseInputFieldProps> = (props) => {
	const [field, { error }] = useField(props);
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={field.name}>{props.label}</FormLabel>
			<Input {...field} id={field.name} placeholder={props.placeholder} />
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	);
};
 

export default BaseInputField;