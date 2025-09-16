module ApplicationHelper
  def bootstrap_toast_class(type)
    case type.to_s
    when "notice", "success" then "text-bg-success"
    when "alert", "error" then "text-bg-danger"
    when "warning" then "text-bg-warning"
    else "text-bg-primary"
    end
  end
end
