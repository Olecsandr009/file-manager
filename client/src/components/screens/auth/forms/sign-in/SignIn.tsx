import { Button, TextField, Typography } from "@mui/material"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { IFormInput, signInFormField } from "../../../../../assets/auth/formFields"
import { FC, MouseEvent } from "react"

interface ISignIn {
    setAuthWindow: (event: MouseEvent<HTMLButtonElement>) => void
}

const SignIn: FC<ISignIn> = ({setAuthWindow}) => {

    const defaultValues = signInFormField.reduce((values, field) => {
        values[field.name as keyof IFormInput] = "";
        return values;
    }, {} as IFormInput);

    const { control, handleSubmit, formState: {errors}, getValues } = useForm<IFormInput>({defaultValues: defaultValues})

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <div className="auth__window">
            <Typography className="auth__title" variant="h3" component="h2">
                Login
            </Typography>

            <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
                {
                    signInFormField.map((fieldData, index) => {
                        return (
                            <Controller 
                                key={index}
                                name={fieldData.name} 
                                control={control}
                                rules={{
                                    ...fieldData.options, 
                                    validate: 
                                        (value) => fieldData.name === "confPassword" 
                                        ? getValues("password") === value || "Password do not match" 
                                        : undefined
                                }}
                                render={({ field }) => (
                                    <TextField 
                                        {...field} 
                                        className="auth__input"
                                        type={fieldData.type}
                                        id="outlined-basic" 
                                        label={fieldData.name} 
                                        variant="outlined" 
                                        error={Boolean(errors[fieldData.name])}
                                        helperText={errors[fieldData.name]?.message}
                                    />
                                )}
                            />
                        )
                    })
                }
                
                <Button className="auth__button" onClick={setAuthWindow} variant="text">Register</Button>
                <Button className="auth__submit" type="submit" variant="contained">Login</Button>
            </form>
        </div>
    )
}

export default SignIn