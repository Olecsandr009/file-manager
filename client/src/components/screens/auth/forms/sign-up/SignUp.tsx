import { Button, Link, TextField, Typography } from "@mui/material"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { IFormInput, formFields } from "../../../../../assets/auth/formFields"

const SignUp = () => {
    const defaultValues = formFields.reduce((values, field) => {
        values[field.name as keyof IFormInput] = "";
        return values;
    }, {} as IFormInput);

    const { control, handleSubmit, formState: {errors}, getValues } = useForm<IFormInput>({defaultValues: defaultValues})

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <div>
            <Typography className="auth__title" variant="h3" component="h2">
                Register
            </Typography>

            <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
                {
                    formFields.map((fieldData, index) => {
                        return (
                            <div key={index}>
                                <Controller 
                                    name={fieldData.name} 
                                    control={control}
                                    rules={{
                                        ...fieldData.options, 
                                        validate: (value) => getValues("password") === value || "Password do not match"
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
                            </div>
                        )
                    })
                }

                <Link href="#">Login</Link>
                <Button className="auth__submit" type="submit" variant="contained">Register</Button>
            </form>
        </div>
    )
}

export default SignUp