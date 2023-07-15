import Button from '@mui/material/Button/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'assets/redux/hooks'
// import { useAppDispatch, useAppSelector } from 'redux/hooks'

type Props = {
    id: string
}

const Like = ({ id }: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()
    return (
        <div>
            <Button
                variant="outlined"
                onClick={() =>
                    dispatch({
                        type: 'TOGGLE_LIKE',
                        id,
                    })
                }
            >
                {/* <FavoriteIcon /> */}
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
        </div>
    )
}
export default Like
