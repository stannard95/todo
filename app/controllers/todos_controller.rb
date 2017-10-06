class TodosController < ApplicationController
  def index

    @todos = current_user.todos
  end

  def show
    @user = current_user
    @todos = @user.todos.find(params[:id])
  end

  def new
    @todo = current_user.todos.new
  end

  def create
    user = User.find(current_user.id)
    user.todos.create(todo_params)

    redirect_to todos_path

  end

  def edit
    @user = User.find(current_user.id)
    @todo = @user.todos.find(params[:id])
  end

  def update
    user = User.find(current_user.id)
    todo = user.todos.find(params[:id])
    todo.update(todo_params)

    redirect_to todos_path
  end

  def destroy
    user = User.find(current_user.id)
    user.todos.destroy(params[:id])
    redirect_to todos_path

  end

  protected
  def todo_params
    params.require(:todo).permit(:title, :body, :priority, :complete)
  end
end
