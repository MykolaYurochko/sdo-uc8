import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "./formSlice";
import BaseInput from "./components/base-input";
import isEmail from "validator/lib/isEmail";

function App() {
  const { formData: userFormData } = useSelector(state => state.testForm);
  const dispatch = useDispatch();

  const fieldsSet = {
    firstName: {
      name: "firstName",
      placeholder: "Enter your first name",
      label: "First name",
      value: userFormData.firstName
    },
    lastName: {
      name: "lastName",
      placeholder: "Enter your last name",
      label: "Last name",
      value: userFormData.lastName
    },
    email: {
      name: "email",
      placeholder: "Enter your email",
      label: "Email",
      value: userFormData.email
    },
    message: {
      name: "message",
      placeholder: "Enter some message",
      label: "Message",
      value: userFormData.message
    }
  };

  const formVlid = () => {
    const emailRule = !!fieldsSet.email.value && isEmail(fieldsSet.email.value);
    const messageRule = fieldsSet.message.value.length >= 10;
    return emailRule && messageRule;
  };

  const updateValue = (fieldName, value) => {
    fieldsSet[fieldName].value = value;
  };

  const onUpdateForm = () => {
    if (formVlid()) {
      dispatch(
        updateForm({
          firstName: fieldsSet.firstName.value,
          lastName: fieldsSet.lastName.value,
          email: fieldsSet.email.value,
          message: fieldsSet.message.value
        })
      );
      return;
    }
    alert(
      "Please enter correct DATA: \n- valid email;\n- message min lenght = 10"
    );
  };

  return (
    <div className='App'>
      <div className='App-form'>
        {Object.entries(fieldsSet).map(([, fieldProps]) => (
          <BaseInput
            key={fieldProps.name}
            {...fieldProps}
            onBlur={updateValue}
            onKeyDown={onUpdateForm}
          />
        ))}
      </div>
      <button className='App-action' onClick={onUpdateForm}>
        Submit form
      </button>
    </div>
  );
}

export default App;
