import { CustomeButton, SwitchToggle } from "../../components";
import { CustomeForm } from '../../components/Form/index';
import {
  Paper,
  Text,
  Container,
  Flex,
  Button,
  Avatar,
} from "@mantine/core";

export function LoginPage() {
  return (
    <Container
      className=" max-h-full"
      sx={(theme) => ({
        height: "100vh",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        [theme.fn.largerThan("sm")]: {},
      })}
    >
      <Flex align="center" justify="center" direction="column" gap={1}>
        <Paper
          p={15}
          mt={30}
          radius="md"
          sx={(theme) => ({
            [theme.fn.largerThan("sm")]: {
              width: `calc(${theme.spacing.xl} * 15)`,
            },
          })}
          className=" shadow-xl"
        >
          <Paper withBorder radius="xl" p={0} className=" shadow-lg" mb={40}>
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: 0,
                padding: 4,
              }}
            >
              <Avatar
                radius="xl"
                p={30}
                bg="lime"
                className=" shadow-xl"
                sx={(theme) => ({
                  [theme.fn.smallerThan("md")]: {
                    padding: `calc(${theme.spacing.sm} * 1.5)`,
                  },
                })}
              >
                <Text
                  color="white"
                  size="sm"
                  sx={(theme) => ({
                    [theme.fn.smallerThan("sm")]: {
                      fontSize: `calc(${theme.spacing.xs} * 1)`,
                    },
                  })}
                >
                  AMN
                </Text>
              </Avatar>

              <Text
                px={15}
                typeof="h5"
                align="center"
                size="xl"
                sx={(theme) => ({
                  fontWeight: 700,
                  [theme.fn.smallerThan("sm")]: {
                    fontSize: `calc(${theme.spacing.sm} * 1)`,
                  },
                })}
              >
                Login
              </Text>

              <SwitchToggle />
            </Flex>
          </Paper> 

          <CustomeForm />

        </Paper>
      </Flex>
    </Container>
  );
}
import { TextInput } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';

interface FormValues {
  name: string;
  occupation: string;
}

function NameInput({ form }: { form: UseFormReturnType<FormValues> }) {
  return <TextInput {...form.getInputProps('name')} />;
}

function OccupationInput({ form }: { form: UseFormReturnType<FormValues> }) {
  return <TextInput {...form.getInputProps('occupation')} />;
}

function Demo() {
  const form = useForm<FormValues>({ initialValues: { name: '', occupation: '' } });
  return (
    <>
      <NameInput form={form} />
      <OccupationInput form={form} />
    </>
  );
}