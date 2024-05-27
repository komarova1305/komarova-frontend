import { AuthForm} from '../components/AuthForm/AuthForm';
import Styles from './Login.module.css';

export default function Login() {
    return (
        <main className={Styles["main"]}>
            <AuthForm />
        </main>
    )
}
