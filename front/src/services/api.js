import axios from "axios";

export const getAllProducts = async () => {
    try {
        const response = await axios.get("http://localhost:2000/api/products");
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const getOneProduct = async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:2000/api/products/${id}`
        );
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
