import React, { useEffect, useState } from 'react';
import Profiles from '../../../../features/Player/PlayerProfile/componets/profile'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerDetails } from '../../store';

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;

  const store = useSelector(state => state.PlayerStore);
  const [Data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PlayerDetails(id));
  }, [id]);

  useEffect(() => {
    setData(store.playerInfo.data);
  }, [dispatch, store.playerInfo]);


  return (
    <div>
      {Data ? (
        <Profiles data={Data} />
        ) : (
          null
      )}
    </div>
  );
}
