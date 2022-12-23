import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { SIGN_IN, SUBMIT_BTN, SIGN_UP } from '../utils/constants';
import TextInput from './TextInput';
import { postSignin, postSignup } from '../utils/axios-api-fn';
import { useNavigate } from 'react-router-dom';
import { validation } from '../utils/validation';

export default function SignForm({ signState, setSignState }) {
  // useState 부분은 지환님 코드 합치면 삭제
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState(initialForm);
  const emailRef = useRef(initialForm.email);
  const passwordRef = useRef(initialForm.password);
  const navigate = useNavigate();

  useEffect(() => {
    clearInput();
  }, [signState]);

  const clearInput = () => {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  // 지환님 부분 코드
  const handleChange = (e) => {
    // useState 부분은 지환님 코드 합치면 삭제
    setForm((prev) => {
      const newForm = { ...prev, [e.target.id]: e.target.value };
      return newForm;
    });
    // 유효성 검사
    const isValidated =
      validation('email', emailRef.current.value) &&
      validation('password', passwordRef.current.value);
    isValidated ? setIsActive(true) : setIsActive(false);
    return;
  };

  //API 구현이 안되어 있어 임시적인 회원가입/로그인 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (signState === SIGN_IN) {
      postSignin(formData);
      navigate('/todo');
    }
    if (signState === SIGN_UP) {
      postSignup(formData);
      setSignState(SIGN_IN);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="email"
        value={emailRef.current.value}
        onChange={handleChange}
        refValue={emailRef}
      />
      <TextInput
        type="password"
        value={passwordRef.current.value}
        onChange={handleChange}
        refValue={passwordRef}
      />
      <SubmitBtn
        type="submit"
        bgColor={theme.btnColor}
        value={SUBMIT_BTN[signState]}
        disabled={!isActive}
      />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 30px;
`;

const SubmitBtn = styled.input`
  border: none;
  font-size: 16px;
  background-color: ${(props) => props.bgColor};
  padding: 12px;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }
`;

const initialForm = {
  email: '',
  password: '',
};
