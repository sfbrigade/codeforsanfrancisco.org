# Plugin to add environment variables to the `site` object in Liquid templates
# Modified from https://gist.github.com/nicolashery/5756478
module Jekyll
  class EnvironmentVariablesGenerator < Generator
    def generate(site)
      # set by Netlify: https://www.netlify.com/docs/continuous-deployment/
      site.config['environment'] = case ENV['CONTEXT']
                                   when 'production'
                                     'production'
                                   when 'deploy-preview', 'branch-deploy'
                                     'staging'
                                   else
                                     'development'
                                   end
    end
  end
end
