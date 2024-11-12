'use client'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, 
} from "@/components/ui/form"
import { Input } from "./ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType
}

const CustomFormField = ({ control, fieldType, name }: CustomProps) => {
        return (
                    <FormField
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                {fieldType !== FormFieldType.CHECKBOX && }
                            </FormItem>
                        )}
                    />
    )
}

export default CustomFormField
