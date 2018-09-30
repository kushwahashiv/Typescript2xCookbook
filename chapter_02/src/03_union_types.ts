namespace chapter02.union_types {

  class Command {
    command: string;
    args: string[];
  }

  function run(command: Command | Command[]) {
    // ...
  }

  const command1 = new Command();
  const command2 = new Command();
  const commands = [command1, command2];

  run(command1);
  run(commands);

}