import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditFrom from '../components/NicknameEditFrom';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [
    { nickname: '팔로워1' },
    { nickname: '팔로워2' },
    { nickname: '팔로워3' },
  ];
  const followingList = [
    { nickname: '팔로잉1' },
    { nickname: '팔로잉2' },
    { nickname: '팔로잉3' },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditFrom />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
