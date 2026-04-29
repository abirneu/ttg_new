import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ContactData {
    industry: string;
    name: string;
    email: string;
    service: string;
    current_interested: string;
    interested: string[];
    budget: string;
}

interface ContactState {
    loading: boolean;
    error: string | null;
    success: boolean;
}

const initialState: ContactState = {
    loading: false,
    error: null,
    success: false,
};

type ContactResponse = {
    message?: string;
};

const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
        return error.message;
    }

    return "Unknown error";
};

export const submitContactForm = createAsyncThunk<
    ContactResponse,
    ContactData,
    { rejectValue: string }
>("contact/submitForm", async (formData, { rejectWithValue }) => {
    try {
        // Replace with actual API endpoint
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            try {
                const errorData = JSON.parse(errorText) as { message?: string };
                throw new Error(errorData.message || "Failed to submit form");
            } catch {
                throw new Error(`Server returned error: ${response.status}`);
            }
        }

        const text = await response.text();
        try {
            return JSON.parse(text) as ContactResponse;
        } catch {
            throw new Error("Invalid response from server");
        }
    } catch (error: unknown) {
        return rejectWithValue(getErrorMessage(error));
    }
});

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        resetFormStatus: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContactForm.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(submitContactForm.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitContactForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetFormStatus } = contactSlice.actions;
export default contactSlice.reducer;
