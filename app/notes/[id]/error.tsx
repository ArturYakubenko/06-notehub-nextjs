interface ErrorProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorProps) => {
    return (
        <p>Could not fetch the list of notes. {message}</p>
    );
};

export default ErrorMessage