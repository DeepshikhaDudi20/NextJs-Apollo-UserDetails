import React, { FC, useContext, useEffect, Suspense, lazy } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { errorMessage } from '../../AppData/GraphQL/constant';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../../server/src/schema/types/types'
import Grid from '../layout/Grid'
import MainContainer from '../layout/MainContainer'
import Header from '../layout/Header'
import Button from '../layout/Button'
import Loader from '../layout/Loader'

const UserDetailsTile = lazy(() => import('../UserDetailsTile/UserDetailsTile'));

const Users: FC = () => {
    const { userList, loading, setLoading, error, handleLoadMore, hasNextPage } =
        useContext(GlobalContext);

    useEffect(() => {
        setLoading(true);
        handleLoadMore();
    }, []);
    return (
        <MainContainer>
            <Header data-testid="user-list-heading">Users Details</Header>
            {!error && !loading && (
                <Grid>
                    <Suspense fallback={<Loader />}>
                        {userList &&
                            userList.map((user: User) => <UserDetailsTile key={uuidv4()} {...user} />)
                        }
                    </Suspense>
                </Grid>
            )}
            {!error && loading && <Loader />}
            {!loading && !error && hasNextPage && (
                <Button
                    role="button"
                    aria-labelledby="Load More Users"
                    data-testid="button-load-more"
                    onClick={handleLoadMore}>Load More Users</Button>
            )}
            {error && <p>{errorMessage}</p>}
        </MainContainer>
    );
}

export default React.memo(Users);
