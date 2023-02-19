import { createContext, FC, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { loadDataCount } from '../AppData/GraphQL/constant';
import { getUserDetails } from '../graphql/queries/getUserDetails';
import { User } from '../../server/src/schema/types/types'

interface IGlobalContext {
    userList: User[];
    loading: boolean;
    error: string;
    hasNextPage: boolean;
    handleLoadMore: () => void;
    setLoading: (loading: boolean) => void;
}

const initialState: IGlobalContext = {
    userList: [],
    loading: false,
    error: '',
    hasNextPage: true,
    handleLoadMore: () => { },
    setLoading: () => { },
};

interface IGlobalProvider {
    children: React.ReactNode;
}
// setting up global context for user details API response
export const GlobalContext =
    createContext<IGlobalContext>(initialState);

export const GlobalProvider: FC<IGlobalProvider> = ({ children }) => {
    const [userList, setUserList] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [hasNextPage, setHasNext] = useState<boolean>(false);

    // to fetch additional user on load more button click
    const { fetchMore } = useQuery(getUserDetails, {
        variables: {
            count: 0,
            page: 1,
        },
        fetchPolicy: 'cache-and-network',
        skip: true,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleLoadMore = () => {
        fetchMore({
            variables: {
                count: loadDataCount,
                page,
            },
        })
            .then((res) => {
                const users =
                    (res.data &&
                        res.data?.UsersList &&
                        res.data.UsersList?.users) ||
                    [];
                setUserList((list) => [...list, ...users]);
                const isNextpage =
                    res.data && res.data?.UsersList && res.data.UsersList?.hasNextPage;
                isNextpage && setPage((index) => index + 1);
                setHasNext(isNextpage);
                setLoading(false);
            })
            .catch((e) => {
                setError(e);
                setLoading(false);
            });
    };

    const providerValue: IGlobalContext = useMemo(
        () => ({
            userList,
            loading,
            setLoading,
            error,
            hasNextPage,
            handleLoadMore,
        }),
        [userList, loading, setLoading, error, hasNextPage, handleLoadMore]
    );

    return (
        <GlobalContext.Provider value={providerValue}>
            {children}
        </GlobalContext.Provider>
    );
};
