import {useState} from "react";
import axios from "axios";
import { Box,FormControl,Input,FormHelperText,FormErrorMessage,FormLabel,Button,Flex,useClipboard } from "@chakra-ui/react";
import styles from './InputForm.module.css';

export const InputForm = () =>{
    const [ input,setInput] = useState(
        {
            longUrl: "",
            urlCode: ""
        }
    );
    const [ url, setUrl ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ isLoading, setIsloading ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const { hasCopied, onCopy } = useClipboard(url);
    const clientBaseUrl = window.location.href;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInput({ ...input, [ id ]: value });
        setIsError(false);
    };
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        if (!input.longUrl) {
            setIsError(true);
            setUrl("Please add a URL");
            return;
        }
        setIsloading(true);
        axios.post('/api/url/shorten', input).then(res => {
            if (res.status) {
                let data = res.data;
                let createUrl = clientBaseUrl + data.urlCode;
                setUrl(createUrl);
            }
            setErrorMsg(null);
            console.log("res", res);
            setIsloading(false);
        }).catch(error => {
            setErrorMsg(error.response.data.error);
            console.log("error", errorMsg);
            setIsloading(false);
        });
    };

    return (
        <Box
            width={ "40%" }
            margin={ "auto" }
            boxShadow="dark-lg"
            p="6"
            rounded="2xl"
            bg="dark"
            className={ styles.mainContainer } >
            <FormControl isInvalid={ isError }>
                <FormLabel >Make long URLs into a  shortened URL with a single click.</FormLabel>
                <Input
                    id="longUrl"
                    type="url"
                    value={ input.longUrl }
                    placeholder="Paste here your long URL"
                    onChange={ handleInputChange }
                    onKeyDown={ handleEnter }
                />
                { !isError ? (
                    <FormHelperText>Enter your Long Url</FormHelperText>
                ) : (
                    <FormErrorMessage>URL is required.</FormErrorMessage>
                ) }
            </FormControl>
           
            <Button type="submit"
                colorScheme="blue"
                m={ 5 }
                onClick={ handleSubmit }
                isLoading={ isLoading }
                loadingText='Submitting'
            >
                Submit
            </Button>
            {errorMsg!==null && <h3>{errorMsg}</h3>}
            { errorMsg===null && url && <Flex mb={ 2 }>
                <Input value={ url } isReadOnly placeholder="Short Url" />
                <Button onClick={ onCopy } ml={ 2 }>
                    { hasCopied ? "Copied" : "Copy" }
                </Button>
            </Flex> }
        </Box>
    );
};