import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from './../queries';

const CreateOrder = async() => {
    const [createOrder] = useMutation(CREATE_ORDER);

    return <div>{createOrder}</div>;
};

export default CreateOrder;