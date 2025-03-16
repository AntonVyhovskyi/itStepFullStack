
import { useEffect, useRef, useState } from 'react'
import './App.css'


interface FormData {
    name: string,
    pass: string,
    pass2: string,
    data: string,
    sex: string,
    age: number | '',
    discription: string

}



function UncontrolForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        pass: '',
        pass2: '',
        data: '',
        sex: '',
        age: '',
        discription: ''

    })


    const formRef = useRef<HTMLFormElement | null>(null)



    const handlerForSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formRef.current) return;
        const formElements = formRef.current.elements as HTMLFormControlsCollection;
        
        const nameInput = formElements.namedItem("name22") as HTMLInputElement;
        const passInput = formElements.namedItem("pass22") as HTMLInputElement;
        const pass2Input = formElements.namedItem("pass222") as HTMLInputElement;
        const dateInput = formElements.namedItem("data22") as HTMLInputElement;
        // const manInput = formElements.namedItem("man22") as HTMLInputElement;
        const womanInput = formElements.namedItem("woman22") as HTMLInputElement;
        const ageInput = formElements.namedItem("age22") as HTMLInputElement;
        const descriptionInput = formElements.namedItem("discription22") as HTMLTextAreaElement;
      
        let newSex = 'man22'
        if (womanInput.checked === true) {
            newSex = 'woman22'
        }
        let newData: FormData = {
            name: nameInput.value,
            pass: passInput.value,
            pass2: pass2Input.value,
            data: dateInput.value,
            sex: newSex,
            age: Number(ageInput.value),
            discription: descriptionInput.value
        }

        setFormData({...newData})


    }
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <>
            <form onSubmit={handlerForSubmit} ref={formRef}>
                <div>
                    <label htmlFor="name22">Name</label>
                    <input required type="text" id="name22" />
                </div>
                <div>
                    <label htmlFor="pass22">Password</label>
                    <input required type="password" id="pass22" />
                </div>
                <div>
                    <label htmlFor="pass222">Password noch mal</label>
                    <input required type="password" id="pass222" />
                </div>
                <div>
                    <label htmlFor="data22">Geburtstag</label>
                    <input required type="date" id="data22" />
                </div>
                <div className="radio">
                    <label htmlFor="sex22">Sex</label>
                    <div>
                        <input type="radio" name="sex22" id="man22" />
                        <label htmlFor="man">Man</label>
                        <input type="radio" name="sex22" id="woman22" />
                        <label htmlFor="woman">Woman</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="age22">Wie alt bist du?</label>
                    <input required type="number" id="age22" max="150" />
                </div>
                <div>
                    <label htmlFor="discription22">Beschreibe dich</label>
                    <textarea style={{ width: "300px", height: "200px", resize: "none" }} name="discription22" id="discription22" placeholder="Ich bin fleissig" ></textarea>
                </div>
                <div>
                    <button type="submit" >
                        Bereit
                    </button>
                </div>

            </form>

        </>
    )
}

export default UncontrolForm
