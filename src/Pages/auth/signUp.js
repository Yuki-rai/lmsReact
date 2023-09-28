import { Box, FormGroup, TextField } from "@mui/material";

export function SignUp(){
    return(
        <>
        <Box container>
            <form>
                <FormGroup>
                    <TextField name="FullName">

                    </TextField>
                </FormGroup>
            </form>
        </Box>
        </>
    )
}