import { FC, useEffect } from 'react'
import styled from 'styled-components'
import UniversalBtn from './UniversalBtn'
import UniversalInput from './UniversalInput'

const StyledCustomForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;

`

interface CustomFormProps {
    obj: { name: string, type: "text" | "number" , placeholder: string }[],
    state: any,
    textBtn: string,
    setState: (item: any) => void,
    onSubmit: (item: any) => void,
    activeBtn?: boolean,
}

const CustomForm: FC<CustomFormProps> = ({ obj, state, setState, onSubmit, textBtn, activeBtn = false }) => {

    const changeValue = (name: string, e: any) => {
        setState({ ...state, [name]: e.target.value });
    }

    useEffect(() => {
        const formName: any = {}
        obj.map((item) => formName[item.name] = "")
        setState(formName)
    }, [])

    return (
        <StyledCustomForm onSubmit={onSubmit}>
            {obj.map(item =>
                <UniversalInput
                    key={item.name}
                    placeholder={item.placeholder}
                    onChange={(e) => changeValue(item.name, e)}
                    type={item.type}
                />)}
            <UniversalBtn disabled={activeBtn} type="submit">{textBtn}</UniversalBtn>
        </StyledCustomForm>
    )
}
export default CustomForm