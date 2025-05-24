import styles from './SerchBar.module.css';
import toast, {Toaster} from 'react-hot-toast';

interface SerchBarProps {
    onSubmit: (search: string) => void;
}

function SerchBar({onSubmit}: SerchBarProps) {
    
    const handleSubmit = (formData: FormData) => {
        const search = formData.get('query') as string;
        if (search === "") {
            toast.error("Please enter your search query.");
             return;            
        }
        onSubmit(search as string);
    };
    return (
        <>
        <Toaster position="top-center" reverseOrder={false}/>

            <header className={styles.header}>
                <div className={styles.container}>
                    <a className={styles.link} href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">Powered by TMDB</a>
                    
                    <form action={handleSubmit} className={styles.form}>
                        
                        <input className={styles.input} type="text" name="query" autoComplete="off" placeholder="Search movies..." autoFocus/>
                        
                        <button className={styles.button} type="submit">Search</button>
                    </form>
                </div>
            </header>
        </>
    );
}

export default SerchBar;