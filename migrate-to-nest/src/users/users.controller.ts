import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import {IUserParams} from './interfaces/user-params.interface'


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto:IUserParams) {
    
  return this.usersService.create(createUserDto);
 
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: IUserParams) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}


/* router.route('/').post(async (req:Request, res:Response, next: NextFunction) => {
  try{
    const result = await createNewUser (entityManager, req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err)
  }
});


router.route('/').get(async (_req:Request, res:Response, next: NextFunction) => {
try {
  const users = await getAllUsers(entityManager);
  res.json(users);
}
catch (err) {
  next(err)
}
});

router.route('/:userId').delete(async (req:Request, res:Response, next: NextFunction) => {
  try{
  const {userId} = req.params;
  const result = await deleteUserById(entityManager, userId);
  if (result === "OK") {
    res
    .status(204)
    .send("The user has been deleted")
  }
 } catch(err){
 next(err);
}
});

router.route('/:userId').put(async (req:Request, res:Response, next: NextFunction) => {
try {
  const {userId} = req.params;
  const result = await updateUserById(entityManager, userId, req.body);
  res.json(result)
} catch (err) {
  next(err);
}
});

router.route('/:userId').get(async (req:Request, res:Response, next: NextFunction) => {
try{
const {userId} = req.params;
const result = await getUserById(entityManager, userId);
res.json(result);
} catch (err){
 next(err);
}
});

}) */