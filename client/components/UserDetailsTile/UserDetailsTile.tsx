import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Address, Email, Name, Phone, TileContent, TileWrapper } from '../layout/Tile';
import { User } from '../../../server/src/schema/types/types'

const UserDetailsTile: FC<User> = ({ name, phoneNumber, email, address, ...user }) => {
  return (
    <TileWrapper data-testid="user-list" {...user}>
      <TileContent >
        <Name data-testid="user-name">{name}</Name>
        <div>
          <Phone data-testid="user-phone" href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </Phone>
        </div>
        <div>
          <Email data-testid="user-email" href={`mailto:${email}`}>
            {email}
          </Email>{' '}
        </div>
        <Address data-testid="user-address">{address}</Address>
      </TileContent>
    </TileWrapper>
  );
};

UserDetailsTile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default UserDetailsTile;
