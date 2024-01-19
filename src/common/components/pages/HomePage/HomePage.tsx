import { useRef } from 'react';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Logo, SwitchLang, SwitchTheme } from '@common/components/atoms';
import { ASSET_COMMON_IMG } from '@common/constants';
import { DATA_GAMES } from '@common/data/games.data';
import styles from './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <SwitchTheme />
      <SwitchLang />
      <Button>Test</Button>
      <Logo />
      <div className={styles.games}>
        {DATA_GAMES.map(({ name, url }) => (
          <Link to={`/games/${url}`} key={name}>
            <Card>
              <CardHeader>
                <Heading size="md" textAlign="center" color="primary">
                  {t(`common.${name}`)}
                </Heading>
              </CardHeader>

              <CardBody>
                <img src={`${ASSET_COMMON_IMG}/${name}.png`} alt={name} />
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>

      <Button ref={btnRef} onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HomePage;
