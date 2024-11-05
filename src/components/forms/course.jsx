import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../context/appState";
// import { Button, Field, Form, Input } from "../Forms";

// eslint-disable-next-line react/prop-types
function Course({ handleChange, values }) {

    const [state, setState] = useAppState();
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
        
    } = useForm({ defaultValues: state, mode: 'onSubmit' });
    const watchPassword = watch('password')
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({ ...state, ...data });
        // navigate('/')
    }

    return (
        <form className="flex gap-3 text-gray-500 text-[1.1rem] mb-[250px]" onSubmit={handleSubmit(saveData)} >
            <div>
                <label htmlFor="Program-title">
                    Program Title
                </label>
                <select name="programmeTitle" onChange={handleChange} value={values.programmeTitle} id="Program-title" required className="p-2 outline-none block"  >
                    <option value="select">--Select--</option>
                    <option value="Post Graduate Diploma in Business (PGDBA)">Post Graduate Diploma in Business (PGDBA)</option>
                    <option value="Masters in Business Administration (MBA)">Masters in Business Administration (MBA)</option>
                    <option value="Master of Sciences (M.Sc)">Master of Sciences (M.Sc)</option>
                    <option value="Doctorate in Business Administration (DBA)">Doctorate in Business Administration (DBA)</option>
                </select>
            </div>


            <div>
                <label htmlFor="course-title">
                    Course Title
                </label>
                <select name="courseTitle" required value={values.courseTitle} onChange={handleChange} id="course-title" className="p-2 outline-none block"   >
                    <option value="select">--Select--</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Management">Management</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="ICT Management">ICT Management</option>
                    <option value="Supply Chain and Logistics Management">Supply Chain and Logistics Management</option>
                    <option value="Procurement and Contract Management">Procurement and Contract Management</option>
                    <option value=">Healthcare and Hospital Management">Healthcare and Hospital Management</option>
                    <option value="Human Resource Management">Human Resource Management</option>
                </select>
            </div>
        </form>
    )
}

export default Course;