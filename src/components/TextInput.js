import styled from 'styled-components';
import { INPUT } from '../utils/constants';

export default function TextInput({ type, value, onChange }) {
  return (
    <Wrapper>
      <InputLabel for={type}>{type}</InputLabel>
      <Input
        type={type}
        id={type}
        placeholder={INPUT.PLACEHOLDER[type]}
        minLength={INPUT.MIN_LEN[type]}
        value={value}
        required
        onChange={onChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputLabel = styled.span`
  font-size: 14px;
`;

const Input = styled.input`
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 12px;
  :valid {
    background-color: white;
  }
  :invalid {
    background-color: #eff5f5;
  }
`;
