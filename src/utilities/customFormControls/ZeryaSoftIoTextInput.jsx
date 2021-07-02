import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react'

export default function ZeryaSoftIoTextInput({...props}) {
    
    const [field,meta]=useField(props)

    return (
         <FormField error={meta.touched && !!meta.error} className="ui form">
             {/* !! bilgi varsa */}
            <input {...field} {...props}  className="ui form"/>
            {meta.touched && !!meta.error?(
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}
