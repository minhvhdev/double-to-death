import React from 'react';

const PlayingCard = React.lazy(() => import('./PlayingCard/PlayingCard'));
const SwitchTheme = React.lazy(() => import('./SwitchTheme/SwitchTheme'));
const SwitchLang = React.lazy(() => import('./SwitchLang/SwitchLang'));
const Logo = React.lazy(() => import('./Logo/Logo'));
const Card = React.lazy(() => import('./Card/Card'));
const Input = React.lazy(() => import('./Input/Input'));
const Button = React.lazy(() => import('./Button/Button'));

export { PlayingCard, SwitchTheme, SwitchLang, Logo, Card, Input, Button };
