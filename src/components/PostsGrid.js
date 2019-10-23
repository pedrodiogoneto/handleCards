import React, { Suspense } from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';

const PostCard = React.lazy(() => import('./PostCard'))

export default function PostsGrid({posts}) {

    const renderPostCards = () => {
		if(!posts) return

		return posts.map(post => (
            <Suspense key={post.id} fallback={<SpinnerWrapper><CircularProgress size={100}/></SpinnerWrapper>}>
                <PostCard post={post} key={post.id}/>
            </Suspense>
        ))
    }

	return (
		<Wrapper>
			{renderPostCards()}
		</Wrapper>
	)
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const SpinnerWrapper = styled.div`
    margin-top: 5%;
    margin-left: 5%;
`