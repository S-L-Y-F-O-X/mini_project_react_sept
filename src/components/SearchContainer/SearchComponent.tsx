import {FC, PropsWithChildren, useState} from "react";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    onSearch: (query: string) => void;
}

const SearchComponent: FC<IProps> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        onSearch(searchQuery);
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export {SearchComponent};