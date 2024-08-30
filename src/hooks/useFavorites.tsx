import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { selectUserFavorites } from '../selectors/selectors';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeFavorites } from '../slices/userReducer';
import { ANIMATION_TIME } from '../constants';
import { UseFavoriteParams, UseFavoriteReturn } from '../contracts';

export const useFavorite = ({
  filmId,
}: UseFavoriteParams): UseFavoriteReturn => {
  const favorites = useAppSelector(selectUserFavorites);
  const dispatch = useAppDispatch();

  const [isFavorite, setIsFavorite] = useState<boolean>(
    favorites.includes(filmId),
  );

  const debouncedSetIsFavorite = useDebouncedCallback((value) => {
    setIsFavorite(value);
  }, ANIMATION_TIME);

  const toggleFavorite = async () => {
    setIsFavorite((favorite) => !favorite);
    try {
      const result = await dispatch(
        changeFavorites({ filmId, isFavorite: !isFavorite }),
      );
      if (result.meta.requestStatus === 'rejected') {
        throw new Error('ошибка');
      }
    } catch {
      debouncedSetIsFavorite(isFavorite);
    }
  };

  return {
    isFavorite,
    toggleFavorite,
  };
};
