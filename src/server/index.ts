/**
 * @OnlyCurrentDoc
 */

import { onOpen, openDialog, openAboutSidebar, temp } from './ui';
import { getSheetsData, addSheet, deleteSheet, setActiveSheet } from './sheets';

// Expose public functions by attaching to `global`
global.onOpen = onOpen;
global.openDialog = openDialog;
global.temp = temp;
global.openAboutSidebar = openAboutSidebar;
global.getSheetsData = getSheetsData;
global.addSheet = addSheet;
global.deleteSheet = deleteSheet;
global.setActiveSheet = setActiveSheet;
